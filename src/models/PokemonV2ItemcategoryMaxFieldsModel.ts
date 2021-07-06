import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategoryMaxFieldsModelBase } from "./PokemonV2ItemcategoryMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategoryMaxFieldsModel */
export interface PokemonV2ItemcategoryMaxFieldsModelType extends Instance<typeof PokemonV2ItemcategoryMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategoryMaxFieldsModel */
export { selectFromPokemonV2ItemcategoryMaxFields, pokemonV2ItemcategoryMaxFieldsModelPrimitives, PokemonV2ItemcategoryMaxFieldsModelSelector } from "./PokemonV2ItemcategoryMaxFieldsModel.base"

/**
 * PokemonV2ItemcategoryMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemcategoryMaxFieldsModel = PokemonV2ItemcategoryMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
