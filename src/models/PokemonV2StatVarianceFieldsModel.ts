import { Instance } from "mobx-state-tree"
import { PokemonV2StatVarianceFieldsModelBase } from "./PokemonV2StatVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatVarianceFieldsModel */
export interface PokemonV2StatVarianceFieldsModelType extends Instance<typeof PokemonV2StatVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatVarianceFieldsModel */
export { selectFromPokemonV2StatVarianceFields, pokemonV2StatVarianceFieldsModelPrimitives, PokemonV2StatVarianceFieldsModelSelector } from "./PokemonV2StatVarianceFieldsModel.base"

/**
 * PokemonV2StatVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2StatVarianceFieldsModel = PokemonV2StatVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
