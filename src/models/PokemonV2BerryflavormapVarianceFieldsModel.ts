import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavormapVarianceFieldsModelBase } from "./PokemonV2BerryflavormapVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavormapVarianceFieldsModel */
export interface PokemonV2BerryflavormapVarianceFieldsModelType extends Instance<typeof PokemonV2BerryflavormapVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavormapVarianceFieldsModel */
export { selectFromPokemonV2BerryflavormapVarianceFields, pokemonV2BerryflavormapVarianceFieldsModelPrimitives, PokemonV2BerryflavormapVarianceFieldsModelSelector } from "./PokemonV2BerryflavormapVarianceFieldsModel.base"

/**
 * PokemonV2BerryflavormapVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2BerryflavormapVarianceFieldsModel = PokemonV2BerryflavormapVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
