import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavormapAvgFieldsModelBase } from "./PokemonV2BerryflavormapAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavormapAvgFieldsModel */
export interface PokemonV2BerryflavormapAvgFieldsModelType extends Instance<typeof PokemonV2BerryflavormapAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavormapAvgFieldsModel */
export { selectFromPokemonV2BerryflavormapAvgFields, pokemonV2BerryflavormapAvgFieldsModelPrimitives, PokemonV2BerryflavormapAvgFieldsModelSelector } from "./PokemonV2BerryflavormapAvgFieldsModel.base"

/**
 * PokemonV2BerryflavormapAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2BerryflavormapAvgFieldsModel = PokemonV2BerryflavormapAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
