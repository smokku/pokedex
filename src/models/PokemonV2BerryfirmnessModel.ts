import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessModelBase } from "./PokemonV2BerryfirmnessModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessModel */
export interface PokemonV2BerryfirmnessModelType extends Instance<typeof PokemonV2BerryfirmnessModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessModel */
export { selectFromPokemonV2Berryfirmness, pokemonV2BerryfirmnessModelPrimitives, PokemonV2BerryfirmnessModelSelector } from "./PokemonV2BerryfirmnessModel.base"

/**
 * PokemonV2BerryfirmnessModel
 *
 * columns and relationships of "pokemon_v2_berryfirmness"
 */
export const PokemonV2BerryfirmnessModel = PokemonV2BerryfirmnessModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
