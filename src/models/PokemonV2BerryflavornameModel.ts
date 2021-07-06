import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavornameModelBase } from "./PokemonV2BerryflavornameModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavornameModel */
export interface PokemonV2BerryflavornameModelType extends Instance<typeof PokemonV2BerryflavornameModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavornameModel */
export { selectFromPokemonV2Berryflavorname, pokemonV2BerryflavornameModelPrimitives, PokemonV2BerryflavornameModelSelector } from "./PokemonV2BerryflavornameModel.base"

/**
 * PokemonV2BerryflavornameModel
 *
 * columns and relationships of "pokemon_v2_berryflavorname"
 */
export const PokemonV2BerryflavornameModel = PokemonV2BerryflavornameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
