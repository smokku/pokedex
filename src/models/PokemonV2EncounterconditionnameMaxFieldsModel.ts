import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionnameMaxFieldsModelBase } from "./PokemonV2EncounterconditionnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionnameMaxFieldsModel */
export interface PokemonV2EncounterconditionnameMaxFieldsModelType extends Instance<typeof PokemonV2EncounterconditionnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionnameMaxFieldsModel */
export { selectFromPokemonV2EncounterconditionnameMaxFields, pokemonV2EncounterconditionnameMaxFieldsModelPrimitives, PokemonV2EncounterconditionnameMaxFieldsModelSelector } from "./PokemonV2EncounterconditionnameMaxFieldsModel.base"

/**
 * PokemonV2EncounterconditionnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EncounterconditionnameMaxFieldsModel = PokemonV2EncounterconditionnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
