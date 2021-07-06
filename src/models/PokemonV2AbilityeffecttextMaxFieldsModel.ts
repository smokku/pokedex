import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityeffecttextMaxFieldsModelBase } from "./PokemonV2AbilityeffecttextMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityeffecttextMaxFieldsModel */
export interface PokemonV2AbilityeffecttextMaxFieldsModelType extends Instance<typeof PokemonV2AbilityeffecttextMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityeffecttextMaxFieldsModel */
export { selectFromPokemonV2AbilityeffecttextMaxFields, pokemonV2AbilityeffecttextMaxFieldsModelPrimitives, PokemonV2AbilityeffecttextMaxFieldsModelSelector } from "./PokemonV2AbilityeffecttextMaxFieldsModel.base"

/**
 * PokemonV2AbilityeffecttextMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2AbilityeffecttextMaxFieldsModel = PokemonV2AbilityeffecttextMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
