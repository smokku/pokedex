import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectMaxFieldsModelBase } from "./PokemonV2SupercontesteffectMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectMaxFieldsModel */
export interface PokemonV2SupercontesteffectMaxFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectMaxFieldsModel */
export { selectFromPokemonV2SupercontesteffectMaxFields, pokemonV2SupercontesteffectMaxFieldsModelPrimitives, PokemonV2SupercontesteffectMaxFieldsModelSelector } from "./PokemonV2SupercontesteffectMaxFieldsModel.base"

/**
 * PokemonV2SupercontesteffectMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2SupercontesteffectMaxFieldsModel = PokemonV2SupercontesteffectMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
