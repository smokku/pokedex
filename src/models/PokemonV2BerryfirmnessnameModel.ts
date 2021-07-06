import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessnameModelBase } from "./PokemonV2BerryfirmnessnameModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessnameModel */
export interface PokemonV2BerryfirmnessnameModelType extends Instance<typeof PokemonV2BerryfirmnessnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessnameModel */
export { selectFromPokemonV2Berryfirmnessname, pokemonV2BerryfirmnessnameModelPrimitives, PokemonV2BerryfirmnessnameModelSelector } from "./PokemonV2BerryfirmnessnameModel.base"

/**
 * PokemonV2BerryfirmnessnameModel
 *
 * columns and relationships of "pokemon_v2_berryfirmnessname"
 */
export const PokemonV2BerryfirmnessnameModel = PokemonV2BerryfirmnessnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
