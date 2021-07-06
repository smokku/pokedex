import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodMaxFieldsModelBase } from "./PokemonV2MovelearnmethodMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodMaxFieldsModel */
export interface PokemonV2MovelearnmethodMaxFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodMaxFieldsModel */
export { selectFromPokemonV2MovelearnmethodMaxFields, pokemonV2MovelearnmethodMaxFieldsModelPrimitives, PokemonV2MovelearnmethodMaxFieldsModelSelector } from "./PokemonV2MovelearnmethodMaxFieldsModel.base"

/**
 * PokemonV2MovelearnmethodMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovelearnmethodMaxFieldsModel = PokemonV2MovelearnmethodMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
