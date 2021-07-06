import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorynameMinFieldsModelBase } from "./PokemonV2ItemcategorynameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorynameMinFieldsModel */
export interface PokemonV2ItemcategorynameMinFieldsModelType extends Instance<typeof PokemonV2ItemcategorynameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorynameMinFieldsModel */
export { selectFromPokemonV2ItemcategorynameMinFields, pokemonV2ItemcategorynameMinFieldsModelPrimitives, PokemonV2ItemcategorynameMinFieldsModelSelector } from "./PokemonV2ItemcategorynameMinFieldsModel.base"

/**
 * PokemonV2ItemcategorynameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemcategorynameMinFieldsModel = PokemonV2ItemcategorynameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
