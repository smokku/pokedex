import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluenameVarianceFieldsModelBase } from "./PokemonV2EncounterconditionvaluenameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluenameVarianceFieldsModel */
export interface PokemonV2EncounterconditionvaluenameVarianceFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluenameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluenameVarianceFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluenameVarianceFields, pokemonV2EncounterconditionvaluenameVarianceFieldsModelPrimitives, PokemonV2EncounterconditionvaluenameVarianceFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameVarianceFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluenameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EncounterconditionvaluenameVarianceFieldsModel = PokemonV2EncounterconditionvaluenameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
