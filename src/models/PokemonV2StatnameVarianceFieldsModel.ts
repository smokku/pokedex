import { Instance } from "mobx-state-tree"
import { PokemonV2StatnameVarianceFieldsModelBase } from "./PokemonV2StatnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatnameVarianceFieldsModel */
export interface PokemonV2StatnameVarianceFieldsModelType extends Instance<typeof PokemonV2StatnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatnameVarianceFieldsModel */
export { selectFromPokemonV2StatnameVarianceFields, pokemonV2StatnameVarianceFieldsModelPrimitives, PokemonV2StatnameVarianceFieldsModelSelector } from "./PokemonV2StatnameVarianceFieldsModel.base"

/**
 * PokemonV2StatnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2StatnameVarianceFieldsModel = PokemonV2StatnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
