import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodStddevFieldsModelBase } from "./PokemonV2MovelearnmethodStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodStddevFieldsModel */
export interface PokemonV2MovelearnmethodStddevFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodStddevFieldsModel */
export { selectFromPokemonV2MovelearnmethodStddevFields, pokemonV2MovelearnmethodStddevFieldsModelPrimitives, PokemonV2MovelearnmethodStddevFieldsModelSelector } from "./PokemonV2MovelearnmethodStddevFieldsModel.base"

/**
 * PokemonV2MovelearnmethodStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovelearnmethodStddevFieldsModel = PokemonV2MovelearnmethodStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
