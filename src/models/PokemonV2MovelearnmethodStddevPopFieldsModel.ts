import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodStddevPopFieldsModelBase } from "./PokemonV2MovelearnmethodStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodStddevPopFieldsModel */
export interface PokemonV2MovelearnmethodStddevPopFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodStddevPopFieldsModel */
export { selectFromPokemonV2MovelearnmethodStddevPopFields, pokemonV2MovelearnmethodStddevPopFieldsModelPrimitives, PokemonV2MovelearnmethodStddevPopFieldsModelSelector } from "./PokemonV2MovelearnmethodStddevPopFieldsModel.base"

/**
 * PokemonV2MovelearnmethodStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovelearnmethodStddevPopFieldsModel = PokemonV2MovelearnmethodStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
