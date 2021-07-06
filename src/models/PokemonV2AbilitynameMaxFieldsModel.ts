import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitynameMaxFieldsModelBase } from "./PokemonV2AbilitynameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitynameMaxFieldsModel */
export interface PokemonV2AbilitynameMaxFieldsModelType extends Instance<typeof PokemonV2AbilitynameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitynameMaxFieldsModel */
export { selectFromPokemonV2AbilitynameMaxFields, pokemonV2AbilitynameMaxFieldsModelPrimitives, PokemonV2AbilitynameMaxFieldsModelSelector } from "./PokemonV2AbilitynameMaxFieldsModel.base"

/**
 * PokemonV2AbilitynameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2AbilitynameMaxFieldsModel = PokemonV2AbilitynameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
