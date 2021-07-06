import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavornameAvgFieldsModelBase } from "./PokemonV2BerryflavornameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavornameAvgFieldsModel */
export interface PokemonV2BerryflavornameAvgFieldsModelType extends Instance<typeof PokemonV2BerryflavornameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavornameAvgFieldsModel */
export { selectFromPokemonV2BerryflavornameAvgFields, pokemonV2BerryflavornameAvgFieldsModelPrimitives, PokemonV2BerryflavornameAvgFieldsModelSelector } from "./PokemonV2BerryflavornameAvgFieldsModel.base"

/**
 * PokemonV2BerryflavornameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2BerryflavornameAvgFieldsModel = PokemonV2BerryflavornameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
