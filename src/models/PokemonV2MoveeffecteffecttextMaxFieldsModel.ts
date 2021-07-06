import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffecteffecttextMaxFieldsModelBase } from "./PokemonV2MoveeffecteffecttextMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffecteffecttextMaxFieldsModel */
export interface PokemonV2MoveeffecteffecttextMaxFieldsModelType extends Instance<typeof PokemonV2MoveeffecteffecttextMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffecteffecttextMaxFieldsModel */
export { selectFromPokemonV2MoveeffecteffecttextMaxFields, pokemonV2MoveeffecteffecttextMaxFieldsModelPrimitives, PokemonV2MoveeffecteffecttextMaxFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextMaxFieldsModel.base"

/**
 * PokemonV2MoveeffecteffecttextMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MoveeffecteffecttextMaxFieldsModel = PokemonV2MoveeffecteffecttextMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
