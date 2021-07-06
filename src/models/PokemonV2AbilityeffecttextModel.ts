import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityeffecttextModelBase } from "./PokemonV2AbilityeffecttextModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityeffecttextModel */
export interface PokemonV2AbilityeffecttextModelType extends Instance<typeof PokemonV2AbilityeffecttextModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityeffecttextModel */
export { selectFromPokemonV2Abilityeffecttext, pokemonV2AbilityeffecttextModelPrimitives, PokemonV2AbilityeffecttextModelSelector } from "./PokemonV2AbilityeffecttextModel.base"

/**
 * PokemonV2AbilityeffecttextModel
 *
 * columns and relationships of "pokemon_v2_abilityeffecttext"
 */
export const PokemonV2AbilityeffecttextModel = PokemonV2AbilityeffecttextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
