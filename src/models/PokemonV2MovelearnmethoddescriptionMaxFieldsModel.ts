import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethoddescriptionMaxFieldsModelBase } from "./PokemonV2MovelearnmethoddescriptionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethoddescriptionMaxFieldsModel */
export interface PokemonV2MovelearnmethoddescriptionMaxFieldsModelType extends Instance<typeof PokemonV2MovelearnmethoddescriptionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethoddescriptionMaxFieldsModel */
export { selectFromPokemonV2MovelearnmethoddescriptionMaxFields, pokemonV2MovelearnmethoddescriptionMaxFieldsModelPrimitives, PokemonV2MovelearnmethoddescriptionMaxFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionMaxFieldsModel.base"

/**
 * PokemonV2MovelearnmethoddescriptionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovelearnmethoddescriptionMaxFieldsModel = PokemonV2MovelearnmethoddescriptionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
