import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavormapSumFieldsModelBase } from "./PokemonV2BerryflavormapSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavormapSumFieldsModel */
export interface PokemonV2BerryflavormapSumFieldsModelType extends Instance<typeof PokemonV2BerryflavormapSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavormapSumFieldsModel */
export { selectFromPokemonV2BerryflavormapSumFields, pokemonV2BerryflavormapSumFieldsModelPrimitives, PokemonV2BerryflavormapSumFieldsModelSelector } from "./PokemonV2BerryflavormapSumFieldsModel.base"

/**
 * PokemonV2BerryflavormapSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2BerryflavormapSumFieldsModel = PokemonV2BerryflavormapSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
