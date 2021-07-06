import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorynameVarianceFieldsModelBase } from "./PokemonV2ItemcategorynameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorynameVarianceFieldsModel */
export interface PokemonV2ItemcategorynameVarianceFieldsModelType extends Instance<typeof PokemonV2ItemcategorynameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorynameVarianceFieldsModel */
export { selectFromPokemonV2ItemcategorynameVarianceFields, pokemonV2ItemcategorynameVarianceFieldsModelPrimitives, PokemonV2ItemcategorynameVarianceFieldsModelSelector } from "./PokemonV2ItemcategorynameVarianceFieldsModel.base"

/**
 * PokemonV2ItemcategorynameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemcategorynameVarianceFieldsModel = PokemonV2ItemcategorynameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
