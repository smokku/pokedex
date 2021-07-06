import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributenameSumFieldsModelBase } from "./PokemonV2ItemattributenameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributenameSumFieldsModel */
export interface PokemonV2ItemattributenameSumFieldsModelType extends Instance<typeof PokemonV2ItemattributenameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributenameSumFieldsModel */
export { selectFromPokemonV2ItemattributenameSumFields, pokemonV2ItemattributenameSumFieldsModelPrimitives, PokemonV2ItemattributenameSumFieldsModelSelector } from "./PokemonV2ItemattributenameSumFieldsModel.base"

/**
 * PokemonV2ItemattributenameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemattributenameSumFieldsModel = PokemonV2ItemattributenameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
