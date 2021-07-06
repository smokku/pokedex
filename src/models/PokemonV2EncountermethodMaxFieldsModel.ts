import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodMaxFieldsModelBase } from "./PokemonV2EncountermethodMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodMaxFieldsModel */
export interface PokemonV2EncountermethodMaxFieldsModelType extends Instance<typeof PokemonV2EncountermethodMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodMaxFieldsModel */
export { selectFromPokemonV2EncountermethodMaxFields, pokemonV2EncountermethodMaxFieldsModelPrimitives, PokemonV2EncountermethodMaxFieldsModelSelector } from "./PokemonV2EncountermethodMaxFieldsModel.base"

/**
 * PokemonV2EncountermethodMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EncountermethodMaxFieldsModel = PokemonV2EncountermethodMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
