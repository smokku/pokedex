import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributemapMaxFieldsModelBase } from "./PokemonV2MoveattributemapMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributemapMaxFieldsModel */
export interface PokemonV2MoveattributemapMaxFieldsModelType extends Instance<typeof PokemonV2MoveattributemapMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributemapMaxFieldsModel */
export { selectFromPokemonV2MoveattributemapMaxFields, pokemonV2MoveattributemapMaxFieldsModelPrimitives, PokemonV2MoveattributemapMaxFieldsModelSelector } from "./PokemonV2MoveattributemapMaxFieldsModel.base"

/**
 * PokemonV2MoveattributemapMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MoveattributemapMaxFieldsModel = PokemonV2MoveattributemapMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
