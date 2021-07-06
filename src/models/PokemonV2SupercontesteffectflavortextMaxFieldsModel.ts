import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectflavortextMaxFieldsModelBase } from "./PokemonV2SupercontesteffectflavortextMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectflavortextMaxFieldsModel */
export interface PokemonV2SupercontesteffectflavortextMaxFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectflavortextMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectflavortextMaxFieldsModel */
export { selectFromPokemonV2SupercontesteffectflavortextMaxFields, pokemonV2SupercontesteffectflavortextMaxFieldsModelPrimitives, PokemonV2SupercontesteffectflavortextMaxFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextMaxFieldsModel.base"

/**
 * PokemonV2SupercontesteffectflavortextMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2SupercontesteffectflavortextMaxFieldsModel = PokemonV2SupercontesteffectflavortextMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
