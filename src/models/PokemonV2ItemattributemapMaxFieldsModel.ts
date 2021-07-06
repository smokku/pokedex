import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributemapMaxFieldsModelBase } from "./PokemonV2ItemattributemapMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributemapMaxFieldsModel */
export interface PokemonV2ItemattributemapMaxFieldsModelType extends Instance<typeof PokemonV2ItemattributemapMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributemapMaxFieldsModel */
export { selectFromPokemonV2ItemattributemapMaxFields, pokemonV2ItemattributemapMaxFieldsModelPrimitives, PokemonV2ItemattributemapMaxFieldsModelSelector } from "./PokemonV2ItemattributemapMaxFieldsModel.base"

/**
 * PokemonV2ItemattributemapMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemattributemapMaxFieldsModel = PokemonV2ItemattributemapMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
